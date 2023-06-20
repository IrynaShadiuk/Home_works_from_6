import { useState } from "react";
import { IEntity } from "../../interfaced/global.dao";

export const useStoredState = (key: string, defaultValue: IEntity[] = []) => {
    const fn = () => {
        const storedState = localStorage.getItem(key);

        if (storedState) {
            return JSON.parse(storedState) as IEntity[];
        }

        return defaultValue;
    }

    const [state, setState] = useState<IEntity[]>(fn());

    return {
        state, setState
    }
};