import { Row, Col, Statistic, Button, Divider } from "antd";
import { FireFilled, CloudFilled } from "@ant-design/icons";
import Layout from "../components/Layout";
import TemperatureChart from "../components/Charts/TemperatureChart";
import HumidityChart from "../components/Charts/HumidityChart";
import temperature from "../utils/temperature";
import humidity from "../utils/humidity";

const style = { background: "#0092ff", padding: "8px 0" };

const IndexPage = () => (
  <Layout title='Mar Mar Mink| Dashboard'>
    <Row gutter={[16, 16]}>
      <Col className='gutter-row' span={4}>
        <Statistic
          title='Temperator (Degree Celcius)'
          value={24.3423}
          precision={2}
          prefix={<FireFilled />}
        />
        <Button style={{ marginRight: 8, marginTop: 8 }} type='primary'>
          Turn On Fan
        </Button>
        <Button style={{ marginRight: 8, marginTop: 8 }} type='primary'>
          Turn Off Fan
        </Button>
      </Col>
      <Col className='gutter-row' span={20}>
        <TemperatureChart data={temperature} />
      </Col>
    </Row>
    <Divider dashed />
    <Row gutter={[16, 16]}>
      <Col className='gutter-row' span={4}>
        <Statistic
          title='Humidity (Percent)'
          value={24.3423}
          precision={2}
          prefix={<CloudFilled />}
          suffix={"%"}
        />
      </Col>
      <Col className='gutter-row' span={20}>
        <HumidityChart data={humidity} />
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;
