import React from "react"
import ReactDOM from "react-dom"

type Model = {
    id: string,
    label: string,
    dataSizeMB: number,
    sizeType: "light" | "moderate" | "heavy",
    location?: string,
}

const models: Model[] = [
    {
        id: "unzen-rhyolite",
        label: "流紋岩 / Rhyolite",
        dataSizeMB: 5.4,
        sizeType: "light",
        location: "Mt. Unzen, Nagasaki Pref. in Japan",
    },
    {
        id: "muroto-gabbro",
        label: "斑れい岩 / Gabbro",
        dataSizeMB: 12.1,
        sizeType: "light",
        location: "Muroto, Kochi Pref. in Japan",
    },
    {
        id: "arizona-lherzolite",
        label: "かんらん岩(捕獲岩) / Lherzolite (xenolith)",
        dataSizeMB: 5.8,
        sizeType: "light",
        location: "Arizona in U.S.A.",
    },
    {
        id: "miyakejima-basalt",
        label: "玄武岩 / Basalt",
        dataSizeMB: 21,
        sizeType: "light",
        location: "Miyakejima Isl., Tokyo Pref. in Japan",
    },
    {
        id: "shodoshima-granite",
        label: "花こう岩 / Granite",
        dataSizeMB: 17,
        sizeType: "light",
        location: "Shodoshima Isl., Kagawa Pref. in Japan",
    },
    {
        id: "tanzawa-tornalite",
        label: "閃緑岩 / Diorite",
        dataSizeMB: 20,
        sizeType: "light",
        location: "Tanzawa, Kanagawa Pref. in Japan",
    },
    {
        id: "miharayama-basalt",
        label: "玄武岩 / Basalt",
        dataSizeMB: 20,
        sizeType: "light",
        location: "Mt. Miharayama, Tokyo in Japan",
    },
    {
        id: "kagawa-rhyolite",
        label: "流紋岩 / Rhyolite",
        dataSizeMB: 20,
        sizeType: "light",
        location: "Goshikidai, Kagawa Pref. in Japan",
    },
    {
        id: "izu-andesite",
        label: "安山岩 / Andesite",
        dataSizeMB: 20,
        sizeType: "light",
        location: "Izu, Shizuoka Pref. in Japan",
    },
    {
        id: "imperial-granite",
        label: "花こう岩 / Granite",
        dataSizeMB: 20,
        sizeType: "light",
        location: "China",
    },
    {
        id: "tanzawa-gabbro",
        label: "斑れい岩 / Gabbro",
        dataSizeMB: 6.7,
        sizeType: "light",
        location: "Tanzawa, Kanagawa Pref. in Japan",
    },
    {
        id: "horoman-peridotite",
        label: "かんらん岩 / Lherzolite",
        dataSizeMB: 7.9,
        sizeType: "light",
        location: "Horoman, Hokkaiso Pref. in Japan",
    },
    {
        id: "basaltic-lava",
        label: "玄武岩 / Basalt",
        dataSizeMB: 6.0,
        sizeType: "light",
        location: "Hawaii in U.S.A",
    },
    {
        id: "wada-obsidian",
        label: "黒曜岩 / Obsidian",
        dataSizeMB: 7.9,
        sizeType: "light",
        location: "Wada, Nagano Pref. in Japan",
    },
    {
        id: "fuji-volcanicbomb",
        label: "玄武岩 / Basalt",
        dataSizeMB: 3.9,
        sizeType: "light",
        location: "Mt. Fuji, Shizuoka Pref. in Japan",
    },
    {
        id: "korea-granite",
        label: "花こう岩 / Granite",
        dataSizeMB: 5.9,
        sizeType: "light",
        location: "Gyeonggi-do in Korea",
    },
    {
        id: "tanzawa-metabasalt",
        label: "玄武岩 / Basalt",
        dataSizeMB: 4.5,
        sizeType: "light",
        location: "Tanzawa, Kanagawa Pref. in Japan",
    },
    {
        id: "nagatoro-ironschist",
        label: "結晶片岩 / Crystalline schist",
        dataSizeMB: 5.9,
        sizeType: "light",
        location: "Nagatoro, Saitama Pref. in Japan",
    },
    {
        id: "sekigawa-actinolite",
        label: "結晶片岩 / Crystalline schist",
        dataSizeMB: 4.5,
        sizeType: "light",
        location: "Sekigawa River, Ehime Pref. in Japan",
    },
    {
        id: "yamanashi-diopside-andesite",
        label: "安山岩 / Andesite",
        dataSizeMB: 4.2,
        sizeType: "light",
        location: "Yamanashi Pref. in Japan",
    },
    {
        id: "sekigawa-gniess",
        label: "片麻岩 / Gniess",
        dataSizeMB: 6.2,
        sizeType: "light",
        location: "Sekigawa River, Ehime Pref. in Japan",
    },
    {
        id: "ikaho-hornblendite",
        label: "安山岩 / Andesite",
        dataSizeMB: 4.7,
        sizeType: "light",
        location: "Ikaho, Gunma Pref. in Japan",
    },
    {
        id: "ibaraki-gniess",
        label: "片麻岩 / Gniess",
        dataSizeMB: 4.2,
        sizeType: "light",
        location: "Ibaraki Pref. in Japan",
    },
    {
        id: "ibaraki-phyllite",
        label: "千枚岩 / Phyllite",
        dataSizeMB: 4.4,
        sizeType: "light",
        location: "Ibaraki Pref. in Japan",
    },
    {
        id: "ibaraki-hornfels",
        label: "ホルンフェルス / Hornfels",
        dataSizeMB: 4.5,
        sizeType: "light",
        location: "Ibaraki Pref in Japan",
    },
    {
        id: "gunma-piemontite-schist",
        label: "結晶片岩 / Crystalline schist",
        dataSizeMB: 1.8,
        sizeType: "light",
        location: "Gunma Pref. in Japan",
    },
    {
        id: "gunma-sericite-schist",
        label: "結晶片岩 / Crystalline schist",
        dataSizeMB: 3.7,
        sizeType: "light",
        location: "Gunma Pref. in Japan",
    },
    {
        id: "tanzania-zoisite-schist",
        label: "結晶片岩 / Crystalline schist",
        dataSizeMB: 3.79,
        sizeType: "light",
        location: "Tanzania",
    },
]

const Card: React.FC<Model> = ({ id, sizeType, label, dataSizeMB, location }) => {
    const href = `index.model-viewer.html?size=${sizeType}#${id}`
    return <div id={id}>
        <a href={href}>{label}</a>
        <div>Location: {location}</div>
        <div>Data size: {dataSizeMB} (MB)</div>
    </div>
}

type Props = {
    models: Model[]
}

const App: React.FC<Props> = ({ models }) => {
    return <> {
        models.map(model => {
            return <Card {...model} />
        })
    }   </>
}

ReactDOM.render(
    <App models={models} />,
    document.getElementById("app")
)