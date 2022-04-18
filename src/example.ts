import { useCallback, useState } from 'react';

function useCombinedGetterSetter<T>(init: T) {
	const [data, setData] = useState(init);

	const combined = useCallback(
		(newData?: T) => {
			if (newData !== undefined) {
				setData(newData);
				return newData;
			}
			return data;
		},
		[data]
	);

	return combined;
}

export { useCombinedGetterSetter };
