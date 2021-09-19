import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	Button,
	SafeAreaView,
	TouchableOpacity
} from 'react-native';

export default function Login({ navigation }) {
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
					padding: 33,
					backgroundColor: '#166837',
					alignItems: 'center',
					justifyContent: 'space-between'
				}}
			>
				<View
					style={{
						alignItems: 'center'
					}}
				>
					<Image
						style={{
							width: 300,
							height: 170
						}}
						source={require('../assets/logo2.png')}
					/>
					<Text
						style={{
							marginTop: 10,
							color: '#fff',
							fontSize: 20
						}}
					>
						Synnovation Lab CTS
					</Text>

					<TouchableOpacity
						onPress={() => {navigation.navigate('Home')}}
						style={{
							marginTop: 20,
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#ffee00',
							borderRadius: 12,
							width: 300,
							height: 60,
							shadowColor: '#000',
							shadowOffset: {
								width: 0,
								height: 3
							},
							shadowOpacity: 0.19,
							shadowRadius: 4,
							elevation: 6,
						}}
					>
						<Text
							style={{
								color: '#166837',
								fontWeight: 'bold',
								fontSize: 17
							}}
						>
							Sign In
						</Text>
					</TouchableOpacity>
				</View>
				<Text
					style={{
						textAlign: 'center',
						color: '#fff'
					}}
				>
					© 2021 Advait Jayadevan Nair. All rights reserved.
				</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#166837'
	},
	container: {
		flex: 1,
		padding: 33,
		backgroundColor: '#166837',
		alignItems: 'center'
	},
	logo: {
		width: 300,
		height: 170
	},
	camera: {
		flex: 1
	},
	buttonContainer: {
		flex: 1,
		backgroundColor: 'transparent',
		flexDirection: 'row',
		margin: 20
	},
	button: {
		flex: 0.1,
		alignSelf: 'flex-end',
		alignItems: 'center'
	},
	text: {
		fontSize: 18,
		color: 'white'
	}
});
