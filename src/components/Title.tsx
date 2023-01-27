type TitleProps = {
  title: string;
  subtitle: string;
};

const Title = (props: TitleProps) => {
  return (
    <div className="section-title">
      <h2>
        {props.title} <span>{props.subtitle}</span>
      </h2>
    </div>
  );
};
export default Title;
