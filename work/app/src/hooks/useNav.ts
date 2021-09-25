import { useNavigation } from '@react-navigation/native';

export const useNav = () => {
	const { navigate, reset, goBack } = useNavigation();

	return { navigate, reset, goBack };
};
