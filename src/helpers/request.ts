const getRequest: (url: string) => Promise<{ status: number; data?: any }> =
  async (url) => {
    try {
      const response = await fetch(url);
      const status = response.status;
      const data =await response.json();
      return { status, data };
    } catch (error) {
      return { status: 500 };
    }
  };

export { getRequest };
