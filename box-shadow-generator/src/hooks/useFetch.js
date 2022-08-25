import axios from "axios";
import { useEffect, useState } from "react"

// marry a state value with a 'url' / http:GET request
function useFetch(initialUrl) {

    const [value, setValue] = useState();

    useEffect(() => {
        reload(initialUrl);
    }, []);

    function reload(url) {
        axios.get(url)
            .then(response => {
                setValue(response.data);
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => { });
    }

    return [value, reload];
}

export { useFetch }