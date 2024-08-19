// src/utils/api.ts

const BASE_URL = 'https://api.example.com'; // Substitua pela URL da sua API

export const fetchCompanies = async (): Promise<any> => {
  const response = await fetch(`${BASE_URL}/companies`);
  if (!response.ok) {
    throw new Error('Falha ao carregar empresas');
  }
  return response.json();
};

export const fetchProductsByCompanyId = async (companyId: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}/companies/${companyId}/products`);
  if (!response.ok) {
    throw new Error('Falha ao carregar produtos');
  }
  return response.json();
};
