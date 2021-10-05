import React from "react"
import ReactDOM from "react-dom"
import styles from "./index.module.css"
import rockList from "./rock-list.json"

type Model = {
    id: string,
    label: string,
    dataSizeMB: number,
    sizeType: "light" | "moderate" | "heavy",
    location?: string,
}

const models = rockList["rock-list"] as Model[]

const Card: React.FC<Model> = ({ id, sizeType, label, dataSizeMB, location }) => {
    const href = `index.model-viewer.html?size=${sizeType}#${id}`
    return (
        <div id={id} className={styles.modelCard}>
            <a href={href} className={styles.anchor}>
                <div className={`${styles.dataSize} ${styles.tray}`}>{dataSizeMB}MB</div>
                <img className={styles.thumbnail} src={`/models/${id}/thumbnail.jpg`} />

                <div className={styles.descriptionContainer}>
                    <div className={styles.tray} style={{ width: "100%" }}>{label}</div>
                    <div className={styles.tray} style={{ width: "100%" }}>{location}</div>
                </div>
            </a>
        </div>
    )
}

type Props = {
    models: Model[]
}

const App: React.FC<Props> = ({ models }) => {
    return <div className={styles.cardContainer}> {
        models.map(model => {
            return <Card {...model} />
        })
    }   </div>
}

ReactDOM.render(
    <App models={models} />,
    document.getElementById("app")
)