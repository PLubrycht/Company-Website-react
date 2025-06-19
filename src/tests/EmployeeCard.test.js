import { render, screen } from '@testing-library/react';
import EmployeeCard from '../components/EmployeesSection/EmployeeCards/EmployeeCard';


test('renders employee card with name and description', () => {
  render(
    <EmployeeCard
      name="Test Imię"
      role="Test Rola"
      image="/test.jpg"
      description="To jest opis pracownika."
    />
  );

  expect(screen.getByText("Test Imię - Test Rola")).toBeInTheDocument();
  expect(screen.getByText("To jest opis pracownika.")).toBeInTheDocument();
});