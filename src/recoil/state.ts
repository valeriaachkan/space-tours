import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

interface Item {
	id: string;
	name: string;
	__typename: string;
	description: string;
	image?: number;
}

// const localStorageEffect =
// 	(key: string) =>
// 	({ setSelf, onSet }) => {
// 		const savedValue = localStorage.getItem(key);
// 		if (savedValue != null) {
// 			setSelf(JSON.parse(savedValue));
// 		}

// 		onSet((newValue, _, isReset) => {
// 			isReset
// 				? localStorage.removeItem(key)
// 				: localStorage.setItem(key, JSON.stringify(newValue));
// 		});
// 	};

export const favouritesState = atom({
	key: 'favouritesState',
	default: [] as Item[],
	effects_UNSTABLE: [persistAtom],
});
