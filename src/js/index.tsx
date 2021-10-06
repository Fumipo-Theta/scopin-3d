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
        <div className={styles.modelCard}>
            <a href={href} className={styles.anchor}>
                <img className={styles.thumbnail} src={`/models/${id}/thumbnail.jpg`} />

                <div className={styles.descriptionContainer}>
                    <div className={`${styles.description} ${styles.tray}`} >{label}</div>
                    <div className={`${styles.description} ${styles.tray}`} >{location}</div>
                </div>
                <div className={`${styles.dataSize} ${styles.tray}`}>{dataSizeMB}MB</div>
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
            return <Card key={model.id} {...model} />
        })
    }   </div>
}

ReactDOM.render(
    <App models={models} />,
    document.getElementById("app")
)