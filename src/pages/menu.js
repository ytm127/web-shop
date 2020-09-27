import React from 'react';
import { Tab, Tabs, Box, Image, Text } from 'grommet';
import product from '../kush.jpg';
import sourPatch from '../sourpatch.jpeg'

export const Menu = () => {
	let mockItems = {
		designer: [ { name: 'Diamond OG', type: 'S' }, { name: 'Phantom OG', type: 'H' } ],
		tier1: [
			{
				name: 'Bubba Kush',
				type: 'I'
			},
			{
				name: 'Lemon Kush',
				type: 'S'
			},
			{
				name: 'Durban Poison',
				type: 'H'
			}
		],
		tier2: [
			{
				name: 'Maui Waui',
				type: 'I'
			},
			{
				name: 'Mimosa',
				type: 'S'
			},
			{
				name: 'Chemdog',
				type: 'S'
			}
		],
		weeklyDeals: [
			{
				name: 'Cough Drop',
				type: 'I'
			},
			{
				name: 'HeadBand',
				type: 'S'
			},
			{
				name: 'Martian Green',
				type: 'S'
			}
		]
	};
	const getTypeColor = (type) => {
		if (type === 'I') return '#ee6055';
		if (type === 'S') return '#60d394';
		if (type === 'H') return '#8093f1';
	};
	const renderMenuItem = (item) => {
		return (
			<Box pad="large" fill style={{ height: 400, marginBottom: 50 }}>
				<Image
					src={product}
					style={{ height: 360, borderRadius: '50%', border: `${getTypeColor(item.type)} thick solid` }}
				/>
				<Text weight="bold" margin="small" textAlign="center">
					{item.name}
				</Text>
			</Box>
		);
	};
	return (
		<Tabs style={{ marginTop: 30 }}>
			<Tab title="Flower">
				<Tabs style={{ marginTop: 20 }}>
					<Tab title="Designer">
						<div>{mockItems.designer.map((item) => renderMenuItem(item))}</div>
					</Tab>
					<Tab title="Tier 1">
						<div>{mockItems.tier1.map((item) => renderMenuItem(item))}</div>
					</Tab>
					<Tab title="Tier 2">
						<div>{mockItems.tier2.map((item) => renderMenuItem(item))}</div>
					</Tab>
					<Tab title="Weekly Deals">
						<div>{mockItems.weeklyDeals.map((item) => renderMenuItem(item))}</div>
					</Tab>
				</Tabs>
			</Tab>
			<Tab title="Edible"><div style={{textAlign:'center'}}>
			<Image height={300} src={sourPatch} style={{marginTop:50}}></Image></div></Tab>
			<Tab title="Misc." />
		</Tabs>
	);
};
