import { useState, useEffect } from "react";
import { Row, Col, Statistic, Divider } from "antd";
import { FireFilled, CloudFilled } from "@ant-design/icons";
import axios from "axios";
import socket from "socket.io-client";

import { HumidityData, TemperatureData } from "../interfaces";
import Layout from "../components/Layout";
import TemperatureChart from "../components/Charts/TemperatureChart";
import HumidityChart from "../components/Charts/HumidityChart";

type DHT = {
  time: string;
  temperature: number;
  humidity: number;
};

type DHTList = {
  temperature: TemperatureData[];
  humidity: HumidityData[];
};

const useSocket = (serverUrl: string, topic: string) => {
  const [dht, setDHT] = useState<DHT>({
    time: "unknown",
    temperature: 0,
    humidity: 0,
  });
  const [isConnected, setConnected] = useState(false);

  useEffect(() => {
    const client = socket.connect(serverUrl, {
      transports: ["websocket"],
    });
    client.on("connect", () => setConnected(true));
    client.on("disconnect", () => setConnected(false));
    client.on(topic, (data: DHT) => {
      setDHT(data);
    });
  }, [serverUrl, topic, isConnected]);

  return { dht, isConnected };
};

const IndexPage = () => {
  const serverUrl = "http://localhost:3100",
    topic = "dht",
    apiUrl = "http://localhost:3100/";
  const { dht } = useSocket(serverUrl, topic);
  const [dhtList, setDHTlist] = useState<DHTList>({
    temperature: [],
    humidity: [],
  });

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setDHTlist(response.data);
      })
      .catch((_err) => {
        alert("Error fetching posts");
      });
  }, [apiUrl]);

  return (
    <Layout title='Mar Mar Mink| Dashboard'>
      <Row gutter={[16, 16]}>
        <Col className='gutter-row' span={4}>
          <Statistic
            title='Temperator (Degree Celcius)'
            value={dht.temperature}
            precision={2}
            prefix={<FireFilled />}
          />
        </Col>
        <Col className='gutter-row' span={20}>
          <TemperatureChart data={dhtList.temperature} />
        </Col>
      </Row>
      <Divider dashed />
      <Row gutter={[16, 16]}>
        <Col className='gutter-row' span={4}>
          <Statistic
            title='Humidity (Percent)'
            value={dht.humidity}
            precision={2}
            prefix={<CloudFilled />}
            suffix={"%"}
          />
        </Col>
        <Col className='gutter-row' span={20}>
          <HumidityChart data={dhtList.humidity} />
        </Col>
      </Row>
    </Layout>
  );
};

export default IndexPage;
