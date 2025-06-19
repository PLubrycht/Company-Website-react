import { render, screen } from '@testing-library/react';
import OfferSquare from '../components/OffersSection/OfferCards/OfferSquare';


test('renders offer with name and icon', () => {
  render(
    <OfferSquare
      name="Oferta testowa"
      description="Opis testowy"
      icon="🔥"
      isNew={true}
    />
  );

  expect(screen.getByText("Oferta testowa")).toBeInTheDocument();
  expect(screen.getByText("Opis testowy")).toBeInTheDocument();
  expect(screen.getByText("🔥")).toBeInTheDocument();
  expect(screen.getByText("(nowość)")).toBeInTheDocument();
});