import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import learnimg1 from "../../Images/learnmodule1.png"
import learnimg2 from "../../Images/riskmanagement.png"
import learnimg3 from "../../Images/psychology.png"
import LearnMap from './LearnMap'
const LearnModule = () => {
    const learningModule = [
        {

            id: 1,
            img: learnimg1,
            header: "Module 1",
            describe: "A share market or stock market is a market where shares of various companies are issued or Traded in. The slight difference between stock market and share market is that stock market allows you to trade in financial instruments like Bonds, mutual funds, derivatives, commodities and as well as shares of companies. Whereas share market only allows to trade in shares of listed companies."
        },

        {
            id: 2,
            img: learnimg2,
            header: "Module 2",
            describe: "Fundamental Analysis is a method of measuring a company’s intrinsic value by examining related economic and financial factors.  Fundamental analysts’ study anything that can affect the security's value, from macroeconomic factors such as the state of the economy and industry conditions to microeconomic factors like the effectiveness of the company's management."
        },

        {
            id: 3,
            img: learnimg3,
            header: "Module 3",
            describe: "Technical analysis is a trading discipline employed to evaluate investments and identify trading opportunities by analysing statistical trends gathered from trading activity, such as price movement and volume. Unlike fundamental analysis, which attempts to evaluate a security's value based on business results such as sales and earnings, technical analysis focuses on the study of price and volume."
        }
    ]
  return (
    <Container>
        <h1 style={{margin: "45px", fontWeight: "bold"}}>Learn With Tradathon</h1>
        {learningModule.map((data, index) => (
                <LearnMap key={index} moduleData={data}
                />
        ))}
    </Container>
  )
}

export default LearnModule