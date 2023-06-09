/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

import Nav from './src/components/Nav';
import CardList from './src/components/CardList';
import {View} from 'react-native';

function App(): JSX.Element {
  return (
    <View>
      <Nav />
      <CardList cardList={cardList} />
    </View>
  );
}

export default App;

type ItemData = {
  courseId: number;
  courseName: string;
  content: {
    text: string;
    imageUrl: string;
    details: string;
  }[];
};


const cardList: ItemData[] = [
  {
    courseId: 1,
    courseName: 'Why was crypto invented?',
    content: [
      {
        text: 'The year is 2008 \n ... and banks are collapsing 🏦☠️',
        imageUrl:
          'https://res.cloudinary.com/cryptohunt/image/upload/v1654267383/website/slides/Intro%20to%20crypto/Lesson%201/Slide_1_nyhejl.png',
        details:
          'In 2008, the world faced a financial crisis caused by banks taking a lot of risk. The governments stepped in and printed money to bail out the banks who caused the problem. This led to inflation, making ordinary people suffer. In response to this, Bitcoin was invented, a decentralized currency that governments have no control over. This currency is operated only by computer code and has no owner. Its purpose is to offer a new way of handling money that is not controlled by any central entity, such as governments, corporations, or rich individuals.',
      },
      {
        text: 'Governments are stepping in… \n … printing money to bail out the banks who caused the problem. 👩🏽‍⚖️💵',
        imageUrl:
          'https://res.cloudinary.com/cryptohunt/image/upload/v1654267383/website/slides/Intro%20to%20crypto/Lesson%201/Slide_2_acomax.png',
        details:
          "In 2008, banks were collapsing due to taking a lot of risk and making bad decisions. Governments stepped in and used taxpayers' money to bail them out. This caused frustration among normal people as their taxes paid for the bailouts, and inflation started to rise. The government's solution to the problem was to print more money, which further drove up inflation and caused even more problems for ordinary people. This situation led to the creation of Bitcoin, a decentralized currency that governments have no control over. Bitcoin operates only by computer code, and no one owns it, making it free from any central entity's influence or control.",
      },
      {
        text: 'And some people are not happy \nNormal peoples’ taxes paid for the bailouts💸, inflation is shooting up 📈, and there are no consequences for bankers👨🏼‍💼.',
        imageUrl:
          'https://res.cloudinary.com/cryptohunt/image/upload/v1654267382/website/slides/Intro%20to%20crypto/Lesson%201/Slide_3_xphk1r.png',
        details:
          "Slide 3 highlights that some people were unhappy with the government's response to the financial crisis of 2008. The crisis was caused by banks taking a lot of risks, and the government bailed them out. This meant that normal people's taxes paid for the bailouts, causing inflation to shoot up, and there were no consequences for the bankers responsible. The slide implies that Bitcoin was created in response to this dissatisfaction as a decentralized currency that no central entity controls, providing an alternative to government-controlled money and financial institutions.",
      },
    ],
  },
  {
    courseId: 2,
    courseName: 'What the heck is a blockchain & how does it work?',
    content: [
      {
        text: "Blockchains are just a history of transactions \nJust like your grandpa's checkbook 👴🏽. Tracking what has been sent where lets you determine who has how much.",
        imageUrl:
          'https://res.cloudinary.com/cryptohunt/image/upload/v1654267714/website/slides/Intro%20to%20crypto/Lesson%202/Slide_1_gj9f5g.png',
        details:
          "Blockchains are a digital ledger that keeps a history of transactions. Similar to a checkbook, it tracks what has been sent where, allowing for the determination of who has how much. However, unlike a traditional checkbook, the history is stored on computers instead of in a physical book. This allows for a more secure and decentralized system for storing financial information. The issue with this, though, is that whoever has control of the computer that adds transactions to the history can potentially cheat the system. That's where the concept of blockchain comes in -- it operates on many computers, each run by someone else, with a full copy of the history, making it difficult for any one person to cheat without being noticed by the rest of the network.",
      },
      {
        text: "Instead of banks \nComputers keep that history and calculate everyone's balance ⚖️",
        imageUrl:
          'https://res.cloudinary.com/cryptohunt/image/upload/v1654267714/website/slides/Intro%20to%20crypto/Lesson%202/Slide_2_w93hbn.png',
        details:
          'https://res.cloudinary.com/cryptohunt/image/upload/v1654267714/website/slides/Intro%20to%20crypto/Lesson%202/Slide_2_w93hbn.png',
      },
      {
        text: "But there is a problem \n... whoever runs the computer that adds transactions to the history has the power to cheat 😨. That's one downside with decentralization: No single owner means no central authority to stop cheaters.",
        imageUrl:
          'https://res.cloudinary.com/cryptohunt/image/upload/v1654267714/website/slides/Intro%20to%20crypto/Lesson%202/Slide_3_lhqcjw.png',
        details:
          'One downside with decentralization is that there is no single owner or central authority to stop cheaters. This means that whoever runs the computer that adds transactions to the history has the power to cheat. To overcome this problem, blockchains operate on many computers, each controlled by different people, with a full copy of the history. If someone tries to cheat, everyone else will notice that their version of the blockchain suddenly looks different. This is why blockchains rely on consensus, which is the way to come to an agreement on what is right or wrong. Consensus ensures that the history stored in the blockchain is accurate and tamper-proof.',
      },
    ],
  },
  {
    courseId: 3,
    courseName: 'No banks, no governments, no owners',
    content: [
      {
        text: "Bitcoin's consensus is very simple\nIt is just a majority vote! \nIf more than 50% of computers agree, then a transaction gets added ✍️ to the permanent history.",
        imageUrl:
          'https://res.cloudinary.com/cryptohunt/image/upload/v1654534130/website/slides/Concensus/Lesson%201/Slide_2_i2nvrb.png',
        details:
          "Bitcoin's consensus is based on a majority vote. This means that if more than 50% of computers in the network agree on a transaction, it will be added to the permanent history. Consensus is crucial for securing the blockchain network, and in the case of Bitcoin, it is achieved through a simple voting process. However, it is important to note that the consensus process is not foolproof, as a group with more than 50% of the network could potentially manipulate the system in what is called a 51% attack. This is a real problem, and Bitcoin's solution is to make it super expensive to perform such an attack. This is why Bitcoin relies on a system called Proof of Work, which requires miners to solve complex computer puzzles in order to validate transactions and earn rewards.",
      },
      {
        text: 'But what happens if someone, or a group, have more than 50% of the network? \nThis type of risk is called a 51% attack. \nThis is a real problem, but Bitcoin has a simple fix: make it super expensive!💰',
        imageUrl:
          'https://res.cloudinary.com/cryptohunt/image/upload/v1654534315/website/slides/Concensus/Lesson%201/Slide_3_sqwkgv.png',
        details:
          'If a single entity or group has control over more than 50% of a blockchain network, it poses a threat to the integrity of the system. This is called a 51% attack. However, Bitcoin has implemented a solution to this problem by making it expensive to conduct such an attack. This is achieved through the process of mining, which requires participants to solve complex computer puzzles to validate transactions. The energy costs associated with mining are high, making it difficult for any one entity to gain control over the network. This also means that mining is harmful to the environment due to its high energy consumption. However, newer blockchains have implemented a different approach to secure their networks called Proof of Stake, which requires validators to have a monetary stake in the network. If they are caught cheating, they lose their stake. This approach is faster and has a much lower impact on the environment.',
      },
      {
        text: 'People who want to validate transactions are forced to do something called "mining" \n Mining ⛏ is the process of solving a very complex computer puzzle 🧩. \nFirst, gotta do some heavy work 💪🏾 Then you get to validate transactions.',
        imageUrl:
          'https://res.cloudinary.com/cryptohunt/image/upload/v1654534216/website/slides/Concensus/Lesson%201/Slide_4_urpans.png',
        details:
          "In order to validate transactions in a blockchain, people are required to do something called 'mining'. This process involves solving complex mathematical puzzles using powerful computers which consume a lot of energy. Once a miner solves a puzzle, they get rewarded with cryptocurrency for their work. However, this energy-intensive process has a significant negative impact on the environment, which is why newer blockchains are using a different method called 'Proof of Stake'.",
      },
    ],
  },
];
