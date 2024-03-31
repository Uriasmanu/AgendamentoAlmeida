import { useEffect, useState } from "react";
import MenuLateral from "../MenuLateral";

const Frota = () => {
    const [frota, setFrota] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setFrota(dados)
            })
    }, [])

    return (
        <>
            <MenuLateral/>
            <section>
                {frota.map((video) => {
                    return <li {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Frota;
