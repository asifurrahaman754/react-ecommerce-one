import image1 from "../../assets/images/collection_01.png";
import image2 from "../../assets/images/collection_02.png";
import * as S from "./Feature";
import { FeatureButton } from "../Resusable/Button";

export default function Feature() {
  return (
    <S.FeatureContainer>
      <S.CardContainer>
        <S.Card>
          <S.ImageContainer>
            <img src={image1} alt="card image" />
          </S.ImageContainer>

          <S.CardContent>
            <span> Phone Device Preset </span>
            <h3>SMARTPHONES</h3>
            <FeatureButton>shop now</FeatureButton>
          </S.CardContent>
        </S.Card>

        <S.Card>
          <S.ImageContainer>
            <img src={image2} alt="card image" />
          </S.ImageContainer>

          <S.CardContent>
            <span>New Colors Introduced</span>
            <h3>HEADPHONES</h3>
            <FeatureButton>shop now</FeatureButton>
          </S.CardContent>
        </S.Card>
      </S.CardContainer>
    </S.FeatureContainer>
  );
}
