import classes from "./ServicesUs.module.scss";

export default function ServicesUs({ ListServicesUs }) {
  return (
    <>
      {ListServicesUs.map((item, index) => (
        <div key={index} className={classes.ServicesUs}>
          <div className={classes.Icon}>{item.icon}</div>
          <h2 className={classes.Title}>{item.title}</h2>
          <p className={classes.Paragraph}>{item.description}</p>
        </div>
      ))}
    </>
  );
}
