import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { clicarBotao } from '../slices/appSlice';

const listenerMiddleware = createListenerMiddleware();
const TOAST_ID = 'botao-toast';

listenerMiddleware.startListening({
  matcher: isAnyOf(
    clicarBotao.pending,
    clicarBotao.fulfilled,
    clicarBotao.rejected
  ),
  effect: (action) => {
    switch (action.type) {
      case clicarBotao.pending.type:
        toast.info('⏳ Aguardando...', { toastId: TOAST_ID, autoClose: false });
        break;

      case clicarBotao.fulfilled.type:
        toast.update(TOAST_ID, {
          render:
            action.payload.tipo === 'sucesso'
              ? '✅ Sucesso!'
              : '🟢 Requisição completa.',
          type: 'success', // CORRETO: string
          autoClose: 3000,
        });
        break;

      case clicarBotao.rejected.type:
        toast.update(TOAST_ID, {
          render: `❌ Erro: ${action.payload}`,
          type: 'error', // CORRETO: string
          autoClose: 3000,
        });
        break;

      default:
        break;
    }
  },
});

export default listenerMiddleware;
