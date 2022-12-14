import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoAPI";

const Cryptocurrencies = ({ simplified }) => {
  const coinCount = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(coinCount);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, search]);

  if (isFetching) return "Loading...";

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Crypto"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[25, 25]} className="crypto-card-container">
        {cryptos?.map((coins) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coins.uuid}>
            <Link to={`/crypto/${coins.uuid}`}>
              <Card
                title={`${coins.rank}. ${coins.name}`}
                extra={<img className="crypto-image" src={coins.iconUrl}></img>}
                hoverable
              >
                <p>Price : {millify(coins.price)}</p>
                <p>Market Cap : {millify(coins.marketCap)}</p>
                <p>Daily Change : {millify(coins.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
