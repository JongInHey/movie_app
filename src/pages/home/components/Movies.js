import styled from "styled-components";
import { spacing } from "../../../GlobalStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { W500_URL } from "../../../constant/imgUrl";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 100px 0 0 ${spacing.side};
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

export const Movies = ({ title, movieData }) => {
  return (
    <>
      <Section>
        <Title>{title}</Title>
        <Swiper slidesPerView={7.4} spaceBetween={20}>
          {movieData.map((data) => (
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
