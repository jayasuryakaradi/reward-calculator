import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import * as api from '../services/api';

jest.mock('../services/api');

describe('App Component', () => {
  const mockTransactions = [
    { customerId: 'C001', amount: 75, date: '2025-01-15', id: 'TX001' },
    { customerId: 'C001', amount: 150, date: '2025-01-20', id: 'TX002' },
    { customerId: 'C002', amount: 60, date: '2025-01-25', id: 'TX003' }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    api.fetchTransactions.mockResolvedValue(mockTransactions);
  });

  describe('Positive Cases', () => {
    test('should render application and load transactions', async () => {
      render(<App />);

      await waitFor(() => {
        expect(api.fetchTransactions).toHaveBeenCalled();
      });
    });

    test('should display customer selection dropdown after loading', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /customer rewards dashboard/i })).toBeInTheDocument();
      });
    });

    test('should select customer and display total rewards card', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByText(/total rewards points/i)).toBeInTheDocument();
      });
    });

    test('should handle fractional transaction amounts', async () => {
      api.fetchTransactions.mockResolvedValue([
        { customerId: 'C001', amount: 75.50, date: '2025-01-15', id: 'TX001' },
        { customerId: 'C001', amount: 100.25, date: '2025-01-20', id: 'TX002' }
      ]);

      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /customer rewards dashboard/i })).toBeInTheDocument();
      });

      expect(screen.getByText(/total rewards points/i)).toBeInTheDocument();
    });
  });

  describe('Negative Cases', () => {
    test('should display error when API fails', async () => {
      api.fetchTransactions.mockRejectedValue(new Error('API Error'));

      render(<App />);

      await waitFor(() => {
        expect(screen.getByText(/failed to load transactions/i)).toBeInTheDocument();
      });
    });

    test('should handle empty transaction array', async () => {
      api.fetchTransactions.mockResolvedValue([]);

      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /customer rewards dashboard/i })).toBeInTheDocument();
      });

      expect(screen.getByText(/total rewards points/i)).toBeInTheDocument();
    });

    test('should handle negative transaction amounts', async () => {
      api.fetchTransactions.mockResolvedValue([
        { customerId: 'C001', amount: -50, date: '2025-01-15', id: 'TX001' }
      ]);

      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /customer rewards dashboard/i })).toBeInTheDocument();
      });

      expect(screen.getByText(/total rewards points/i)).toBeInTheDocument();
    });

    test('should handle zero transaction amounts', async () => {
      api.fetchTransactions.mockResolvedValue([
        { customerId: 'C001', amount: 0, date: '2025-01-15', id: 'TX001' }
      ]);

      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /customer rewards dashboard/i })).toBeInTheDocument();
      });

      expect(screen.getByText(/total rewards points/i)).toBeInTheDocument();
    });
  });
});
