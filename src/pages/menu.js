import React, { useContext } from 'react';
import GlobalContext from '../global-context'
import { Tab, Tabs, Box, Image, Text } from 'grommet';

export const Menu = () => {
	const GLOBAL = useContext(GlobalContext)
	const getTypeColor = (type) => {
		if (type === 'I') return '#ee6055';
		if (type === 'S') return '#60d394';
		if (type === 'H') return '#8093f1';
	};
	const renderMenuItem = (item, idx) => {
		const isFirstProduct = idx === 0
		const name = item.fields?.Name
		const type = item.fields?.Type
		const notes = item.fields?.Notes
		const url = item.fields?.Attachments?.[0].url
		return (
			<Box pad="large" fill style={{ height: 500, marginBottom: 50, marginTop: isFirstProduct ? '7vh' : 0 }}>
				<Image
					src={url}
					style={{ height: 360, borderRadius: '50%', border: `${getTypeColor(type)} thick solid` }}
				/>
	<div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>{name} {type && `(${type})`}</div>
				<div style={{ textAlign: 'center' }}>{notes}</div>
			</Box>
		);
	};
	return (
		<Tabs style={{ marginTop: 30 }}>
			<Tab title="Flower">
				<Tabs style={{ marginTop: 20 }}>
					<Tab title="Designer">
						<div>{GLOBAL?.products?.filter(p => p.fields.Tier === 'D').map((item, idx) => renderMenuItem(item, idx))}</div>
					</Tab>
					<Tab title="Tier 1">
						<div>{GLOBAL?.products?.filter(p => p.fields.Tier === 'T1').map((item, idx) => renderMenuItem(item, idx))}</div>
					</Tab>
					<Tab title="Tier 2">
						<div>{GLOBAL?.products?.filter(p => p.fields.Tier === 'T2').map((item, idx) => renderMenuItem(item, idx))}</div>
					</Tab>
					<Tab title="Weekly Deals">
						<div>{GLOBAL?.products?.filter(p => p.fields.Tier === 'WD').map((item, idx) => renderMenuItem(item, idx))}</div>
					</Tab>
				</Tabs>
			</Tab>
			<Tab title="Edible"><div style={{ textAlign: 'center' }}>
				<div>{GLOBAL?.products?.filter(p => p.fields.Category === 'Edible').map((item, idx) => renderMenuItem(item, idx))}</div>
			</div>
			</Tab>
			<Tab title="Misc.">
				<div>{GLOBAL?.products?.filter(p => p.fields.Category === 'Misc').map((item, idx) => renderMenuItem(item, idx))}</div>
			</Tab>
		</Tabs>
	);
};
