import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BooksWidget } from '../widgets/modal/components/BooksWidget';
import { useUpdateBook } from '../entities/books/hooks/useUpdateBook';
import { useCreateBook } from '../entities/books/hooks/useCreateBook';
import { useGetModalState } from '../widgets/modal/hooks/useGetModalState';
import { useCloseModal } from '../widgets/modal/hooks/useCloseModal';
import { getDataFromForm } from '../utils/index';
import '@testing-library/jest-dom';


jest.mock('../entities/books/hooks/useUpdateBook');

jest.mock('../entities/books/hooks/useCreateBook');

jest.mock('../widgets/modal/hooks/useGetModalState');

jest.mock('../widgets/modal/hooks/useCloseModal');

jest.mock('../utils/index');

const mockUpdateBook = jest.fn(()=>'test1');
const mockCreateBook = jest.fn(()=>'test2');
const mockCloseWidget = jest.fn(()=>'test3');
describe('BooksWidget', () => {

  beforeEach(() => {
    useGetModalState.mockReturnValue({
      action: 'edit',
      initValues: {
        name: 'Book 1',
        price: 10,
        category: 'Category 1',
        description: 'Description 1',
      },
      isOpen: true,
      id: 1,
    });

    useCloseModal.mockReturnValue(mockUpdateBook);

    useUpdateBook.mockReturnValue(mockCloseWidget);

    useCreateBook.mockReturnValue(mockCreateBook);

    render(<BooksWidget />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the widget with the correct title', () => {
    expect(screen.getByText('Edit book')).toBeInTheDocument();
  });

  it('calls the updateBook function when the form is submitted in edit mode', () => {
    getDataFromForm.mockReturnValue({ /* Mock form data here */ });

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mockUpdateBook).toHaveBeenCalledWith({
      book: expect.any(Object),
      id: 1,
    });
    
  });

  it('calls the createBook function when the form is submitted in create mode', () => {
    useGetModalState.mockReturnValue({
      action: 'create',
      initValues: undefined,
      isOpen: true,
    });

    getDataFromForm.mockReturnValue({ /* Mock form data here */ });
   

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mockCreateBook).toHaveBeenCalledWith(expect.any(Object));
  });

  it('calls the closeWidget function when the "Cancel" button is clicked', () => {
    
    useCloseModal.mockReturnValue(mockCloseWidget);

    const abortButton = screen.getByText('Cancel');
    fireEvent.click(abortButton);

    expect(mockCloseWidget).toHaveBeenCalledTimes(1);
  });
});