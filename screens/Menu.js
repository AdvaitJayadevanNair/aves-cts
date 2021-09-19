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
import { MaterialIcons } from '@expo/vector-icons';

export default function Menu({ navigation }) {
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
				<TopBar leading="arrow-back-ios" leadingOnClick={() => navigation.goBack()} title="Menu" />

				<TextButton icon="article" text="Form" onPress={() => navigation.navigate("Home")}/>
				<TextButton icon="history" text="History" onPress={() => navigation.navigate("History")}/>
				<TextButton icon="calendar-today" text="Schedule" onPress={() => navigation.navigate("Home")}/>

				<TextButton icon="event-available" text="Schedule Requests" onPress={() => navigation.navigate("Home")}/>
				<TextButton icon="calendar-today" text="View Schedules" onPress={() => navigation.navigate("Home")}/>
				<TextButton icon="search" text="Find" onPress={() => navigation.navigate("Home")}/>
				<TextButton icon="notifications" text="Notify" onPress={() => navigation.navigate("Home")}/>
				<TextButton icon="place" text="Set User to Location" onPress={() => navigation.navigate("Home")}/>
				<TextButton icon="grid-view" text="Dashboard" onPress={() => navigation.navigate("Home")}/>
				<TextButton icon="report" text="Report/Feedback" onPress={() => navigation.navigate("Home")}/>
			</View>
		</SafeAreaView>
	);
}

function TextButton({icon, text, onPress}) {
	return (
		<TouchableOpacity style={{
			marginTop: 15,
			flexDirection: 'row',
			justifyContent: 'center'
			}} onPress={onPress}>
			<MaterialIcons name={icon} size={36} color="#ffee00" />
			<Text style={{
				// color: "#ffee00",
				marginLeft: 4,
				color: "#fff",
				fontSize: 20,
				}}>{text}</Text>
		</TouchableOpacity>
	);
}
