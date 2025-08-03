export default async (scope) => {
    const version = scope.version || scope.component?.latest_version || 'latest';
	const baseUrl = `https://manager.vueplay.io/${scope.slug}@${version}`;
	const [analyzeRes, codeRes] = await Promise.all([fetch(`${baseUrl}/analyze`, {
		headers: {
			Authorization: `Bearer ${scope.account?.accessToken}`
		}
	}), fetch(`${baseUrl}/esm`, {
		headers: {
			Authorization: `Bearer ${scope.account?.accessToken}`
		}
	})]);
	let [analyze, code] = await Promise.all([analyzeRes.json(), codeRes.text()]);
	const name = code.includes('This component is protected by Vue Play') ? Math.random()
		.toString(36)
		.substring(2, 7) : 'vue';
	const blobESM = new Blob([code.replace(`from "vue";`, `from "${name}";`)], {
		type: 'application/javascript'
	});
	const blobESMURL = URL.createObjectURL(blobESM);
	const controls = [];
	const propControls = [...new Set(analyze?.analyze?.props?.filter(p => p?.hidden !== true && p?.hidden !== 'true')
		?.map(prop => {
			if (!prop?.control) {
				if (prop?.type === 'Boolean') return 'boolean';
			}
			return prop?.control;
		})
		.filter(Boolean))] || [];
	if (!propControls.includes('control')) {
		propControls.push('control');
	}
	if (!propControls.includes('box')) {
		propControls.push('box');
	}
	const controlVersionsResponse = await fetch(`https://manager.vueplay.io/packages/latest?slugs=${propControls.join(',')}`, {
		headers: {
			Authorization: `Bearer ${scope.account?.accessToken}`
		}
	});
	const controlVersions = await controlVersionsResponse.json();
	const controlFetchPromises = propControls.filter(control => control && !controls.some(c => c.control === control))
		.map(async control => {
			try {
				const version = controlVersions.find(v => v.slug === control)
					?.latest || 'latest';
				const response = await fetch(`https://manager.vueplay.io/${control}@${version}/esm`, {
					headers: {
						Authorization: `Bearer ${scope.account?.accessToken}`
					}
				});
				const code = await response.text();
				const blobESMControl = new Blob([code.replace(`from "vue";`, `from "${name}";`)], {
					type: 'application/javascript'
				});
				const blobESMURLControl = URL.createObjectURL(blobESMControl);
				return {
					control: scope.normalize(control),
					blob: blobESMURLControl
				};
			} catch (e) {
				console.log('Error fetching control', control, e.message);
				return {
					control: scope.normalize(control),
					blob: null,
					error: e.message
				};
			}
		});
	const fetchedControls = await Promise.all(controlFetchPromises);
	controls.push(...fetchedControls);
    return {
		componentURL: blobESMURL,
        controls,
        analyze,
		vueName: name
    }
}