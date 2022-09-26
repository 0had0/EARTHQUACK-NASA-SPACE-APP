import {useEffect, useState} from "react";

function useForceUpdate() {
    /* eslint-disable-next-line no-unused-vars */
    const [_, setValue] = useState(0);
    useEffect(() => {
        setTimeout(() => setValue(value => value + 1), 1000)
    }, [])
}

export default useForceUpdate;