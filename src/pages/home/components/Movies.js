import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { W500_URL } from "../../../constant/imgUrl";
import { spacing } from "../../../GlobalStyle";

const Section = styled.section`
  padding: 100px 0 100px ${spacing.side};
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  margin-top: 20px;
`;

export const Movies = ({ nowData }) => {
  return (
    <>
      <Section>
        <Title>현재 상영 영화</Title>
        <Swiper slidesPerView={7.4} spaceBetween={20}>
          {nowData.map((data) => (
            <SwiperSlide key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <img src={`${W500_URL}${data.poster_path}`} alt={data.title} />
                <MovieTitle>{data.title}</MovieTitle>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </>
  );
};
