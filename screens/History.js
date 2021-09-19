import React, { useState, useEffect } from 'react';
import {
	TouchableOpacity,
	Text,
	View,
	Platform,
	Button,
	Alert,
	SafeAreaView,
	Image
} from 'react-native';
import TopBar from '../components/TopBar';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function History({ navigation }) {
	const [date, setDate] = useState(new Date());

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: '#166837'
			}}
		>
			<View
				style={{
					flex: 1,
					paddingLeft: 33,
					paddingRight: 33,
					backgroundColor: '#166837',
					alignItems: 'center'
				}}
			>
				<TopBar
					leading="arrow-back-ios"
					leadingOnClick={() => navigation.goBack()}
					title="History"
				/>
				<DateTimePicker
					value={date}
					onChange={(event, date) => {
						setDate(date);
						console.log(event, date);
					}}
					mode="date"
					display="default"
					maximumDate={new Date(2021, 8, 20)}
					minimumDate={new Date(2021, 8, 12)}
					style={{
						flex: 1
						}}
				/>
			</View>
		</SafeAreaView>
	);
}
