import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const clicarBotao = createAsyncThunk(
  'app/clicarBotao',
  async (tipo, { rejectWithValue }) => {
    try {
      if (tipo === 'erro') {
        throw new Error('Falha simulada!');
      }
      await new Promise((resolve) => window.setTimeout(resolve, 800));
      return { tipo };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const appSlice = createSlice({
  name: 'app',
  initialState: { status: 'idle', message: '', error: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(clicarBotao.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.message = '⏳ Aguardando...';
        state.error = null;
      })
      .addCase(clicarBotao.fulfilled, (state, action) => {
        state.status = 'success';
        state.loading = false;
        state.message =
          action.payload.tipo === 'sucesso'
            ? '✅ Sucesso!'
            : '🟢 Requisição completa.';
        state.botaoClicado = !state.botaoClicado;
      })
      .addCase(clicarBotao.rejected, (state, action) => {
        state.status = 'error';
        state.loading = false;
        state.message = '❌ Erro ao clicar';
        state.error = action.payload;
      });
  },
});

export default appSlice.reducer;
