import Layout from "../../common/layout/layout";
import StartButton from "../../components/start-button/start-button";
import "./start-page.scss";

export default function StartPage() {
  return (
    <>
      <Layout>
        <div className="overview">
          <h1>Создайте чертежи своей квартиры</h1>
          <p className="description">
            Уникальный инструмент для самостоятельного составления технических
            чертежей на ремонт вашей квартиры. Программа адаптирована именно для
            ремонта квартир и позволяет создать полноценную рабочую документацию
            для его проведения.
          </p>
          <StartButton />
        </div>
      </Layout>
    </>
  );
}
