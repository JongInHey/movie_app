import { Link } from "react-router-dom";
import styled from "styled-components";
import { spacing } from "../../../GlobalStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { W500_URL } from "../../../constant/imgUrl";

const Section = styled.section`
  padding: 100px 0 0 ${spacing.side};

  @media screen and (max-width: 768px) {
    padding: 50px 0 0 ${spacing.moSide};
  }
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

const params = {
  slidesPerView: 7.4,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 7.4,
    },
    640: {
      slidesPerView: 5.3,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 3.3,
      spaceBetween: 10,
    },
  },
};

export const Movies = ({ title, movieData }) => {
  return (
    <>
      <Section>
        <Title>{title}</Title>
        <Swiper {...params}>
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
