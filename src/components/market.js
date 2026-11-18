// What the Market says of an item, shared by its cards and its page
export function typeName(type) {
	if (type === 'vue-sfc') return 'component';
	if (type === 'vue-app') return 'application';
	if (type === 'vue-template') return 'template';
	return type || 'item';
}

// The category an item is listed under: its address in the Market and its canonical one
export function categoryOf(type) {
	if (type === 'vue-sfc') return 'components';
	if (type === 'vue-template') return 'templates';
	return 'all';
}

// The address of an item's page, from the category it is seen in
export function productPath(component, category = 'all') {
	return `/market/${category || 'all'}/${component.slug}${component?.latest_version ? ('/' + component.latest_version) : ''}`;
}

export function priceText(price) {
	if (!price) return 'Free';
	const amount = price / 100;
	return '$' + (Number.isInteger(amount) ? amount + '.00' : amount.toFixed(2));
}

// An item's picture: an address (or data: address) is shown as a picture; an SVG icon is drawn in the
// site's colour through a mask, so its markup is never put into the page
export function pictureOf(component) {
	const icon = String(component?.icon || '').trim();
	if (!icon) return null;
	if (icon.startsWith('<svg')) return { kind: 'icon', style: { '--icon': `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(icon)}")` } };
	return { kind: 'image', src: icon };
}
