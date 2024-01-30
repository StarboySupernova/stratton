/* eslint-disable prettier/prettier */
import React from 'react';
import MissionHeroSection from '../components/homePage/MissionHeroSection';
import SEO from '../components/seo';
import ParagraphText from '../components/typography/ParagraphText';
import { SectionTitle } from '../components/typography/Title';
import { NotFoundPageStyles } from '../styles/NotFoundPageStyles';
import PageSpace from '../components/PageSpace';

function MwenjeBackground() {
  return (
    <PageSpace>
      <SEO title="Mwenje Background" />
      <div className="container">
        <NotFoundPageStyles>
          <SectionTitle className="title">Company Background</SectionTitle>
          <ParagraphText>
            Mwenje Minerals is an arm of Mwenje Holdings Group of Companies. It
            one of the profit making arm in the Holdings and it was birthed from
            deep desire to exploit Africa's resources for its economic and
            development. It is also motivated by the quest to build influential
            leaders in Africa who have also financial influence apart from
            position or education power. It is an endeavour to democratize the
            average African's participation in his or her continent's vast
            minerals, which constitute approximately 70% of the world's
            reserves. Beyond extraction, it offers consultancy services,
            facilitating the transition from small-scale to commercial mining
            operations by connecting clients with investors. With a focus on
            mineral processing and trading, Mwenje Minerals provides expert
            technical support, contributing to national economic growth. With
            over 50 skilled employees, the company fosters gender equality,
            actively encouraging women's participation and entrepreneurship in
            the mining sector.
          </ParagraphText>
          <SectionTitle className="title">Products/Services</SectionTitle>
          <ParagraphText>
            What sets Mwenje Minerals apart is its inclusive approach, catering
            to beginners, government stakeholders, industry veterans, and
            investors. The company offers clients meticulously researched,
            step-by-step guidance, turning dreams into tangible realities. With
            a commitment to partnership, Mwenje Minerals illuminates a path of
            possibilities, transforming aspirations into opportunities.
            Leveraging its expertise and knowledge, the company provides
            research services for informed decision-making in the mining
            industry. Tailoring business plans to different entry levels,
            including growth models, Mwenje Minerals delivers a spectrum of
            services—from geological exploration and mine setup to mineral
            extraction, processing, surveys, GIS, remote sensing, cartography,
            project management, marketing, administration, financial planning,
            and investment consultancy. Mwenje Minerals is your beacon of light
            in the mineral industry!
          </ParagraphText>
          <SectionTitle className="title">Technologies</SectionTitle>
          <ParagraphText>
            Mwenje maximizes cutting-edge technology across its technical and
            administrative services, ensuring clients achieve significant
            returns on minimal investments. The company stays abreast of all
            industry legislation, policies, and government decisions,
            strategizing to optimize your business profitability and navigate
            any presented challenges effectively.
          </ParagraphText>
          <SectionTitle className="title">Markets</SectionTitle>
          <ParagraphText>
            Mwenje Minerals focuses on engaging emerging mine owners, women in
            mining, established mining companies, government stakeholders,
            mineral polishing and processing entities, traders, investors, and
            mine developers. Recognizing Africa's untapped mineral potential and
            the desire of many to enter the industry without a clear path,
            Mwenje Minerals fills that gap, providing solutions, advice, and
            strategies. Our company brings illumination, empowering clients to
            make their businesses work effectively, enabling them to enjoy the
            fulfilling life they deserve.
          </ParagraphText>
          <SectionTitle className="title">Channels</SectionTitle>
          <ParagraphText>
          - Government stakeholders
          - National and International Mining Boards 
          - Private companies and Traders 
          - Government and Private shipping and transportation
          </ParagraphText>
          <SectionTitle className="title">Competition</SectionTitle>
          <ParagraphText>
            In this industry, adaptability to frequent legislative changes is
            crucial. Mwenje Minerals excels in offering comprehensive planning
            and scoping services to anticipate, mitigate, and assess risks,
            ensuring our clients' businesses remain resilient. With our industry
            expertise and continuous monitoring of government regulations, we
            stay ahead of the competition, providing strategic insights for
            sustained success.
          </ParagraphText>
        </NotFoundPageStyles>
      </div>
      <MissionHeroSection />
    </PageSpace>
  );
}

export default MwenjeBackground;
