import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
const Pyramid = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Calories Gain" />
      <div className="w-full">
        <AccumulationChartComponent
          id="charts"
          enableAnimation={true}
          tooltip={{ enable: true }}
          legendSettings={{ background: "white" }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              AccumulationLegend,
              PyramidSeries,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
              }}
              name="Food"
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
        ;
      </div>
    </div>
  );
};

export default Pyramid;
