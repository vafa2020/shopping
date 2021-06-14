import classes from './ServicesUs.module.scss';



export default function ServicesUs({data}) {
    return (
        <div className={classes.ServicesUs}>
            <div className={classes.Icon}>{data.icon}</div>
            <h2 className={classes.Title}>{data.title}</h2>
            <p className={classes.Paragraph}>{data.description}</p>
        </div>

    )
}