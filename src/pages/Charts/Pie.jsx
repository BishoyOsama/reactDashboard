import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import { pieChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const Pie = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Pie" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pie-chart"
          height="500px"
          legendSettings={{ visible: false }}
          enableAnimation={true}
          enableSmartLabels={true}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              AccumulationLegend,
              PieSeries,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieChartData}
              xName="x"
              yName="y"
              dataLabel={{ visible: true, position: "Inside", name: "text" }}
              explode={true}
              explodeOffset="10%"
              explodeIndex={3}
              radius="90%"
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pie;
