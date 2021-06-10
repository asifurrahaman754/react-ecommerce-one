import * as S from "./newsletter";

export default function Newsletter() {
  return (
    <S.NewsletterSection>
      <S.NewsletterContainer>
        <S.NewsletterContent>
          <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
          <p>
            A short sentence describing what someone will receive by subscribing
          </p>
        </S.NewsletterContent>
        <S.NewsletterInput>
          <input required type="email" placeholder="enter your email" />
          <button type="submit">subscribe</button>
        </S.NewsletterInput>
      </S.NewsletterContainer>
    </S.NewsletterSection>
  );
}
