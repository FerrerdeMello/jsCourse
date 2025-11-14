/**
 * Button Component
 *
 * PADRÃO DE DESIGN: Presentation Component (Dumb Component)
 * Este componente é puramente visual e não possui lógica de negócio.
 * Recebe tudo via props, promovendo reusabilidade e testabilidade.
 * Referência: https://react.dev/learn/thinking-in-react
 *
 * PADRÃO DE DESIGN: Composition Pattern
 * Usa 'children' para permitir composição flexível do conteúdo.
 * Referência: https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
 *
 * PADRÃO DE DESIGN: Controlled Component Pattern
 * O estado do componente é controlado pelo componente pai via props.
 */

import PropTypes from 'prop-types';
import './Button.css';

/**
 * Componente de botão reutilizável e acessível
 *
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Conteúdo do botão
 * @param {('primary'|'secondary'|'danger')} [props.variant='primary'] - Variante visual
 * @param {('small'|'medium'|'large')} [props.size='medium'] - Tamanho do botão
 * @param {boolean} [props.disabled=false] - Se o botão está desabilitado
 * @param {boolean} [props.loading=false] - Se o botão está em estado de carregamento
 * @param {Function} [props.onClick] - Callback ao clicar no botão
 * @param {('button'|'submit'|'reset')} [props.type='button'] - Tipo do botão HTML
 * @param {string} [props.className=''] - Classes CSS adicionais
 * @param {string} [props.ariaLabel] - Label para acessibilidade
 * @returns {JSX.Element} Elemento do botão
 *
 * @example
 * <Button variant="primary" onClick={handleClick}>
 *   Clique Aqui
 * </Button>
 */
const ButtonStylized = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
  ...rest
}) => {
  /**
   * PADRÃO: Event Handler Pattern
   * Encapsula lógica de evento para prevenir execução quando desabilitado/loading
   *
   * @param {React.MouseEvent<HTMLButtonElement>} event - Evento de clique
   */
  const handleClick = (event) => {
    // Previne ação se botão está desabilitado ou carregando
    if (disabled || loading) {
      event.preventDefault();
      return;
    }

    // Executa callback se fornecido
    if (onClick) {
      onClick(event);
    }
  };

  /**
   * PADRÃO: Builder Pattern (String Builder)
   * Constrói string de classes CSS dinamicamente baseado em props
   * Referência: Pattern comum em bibliotecas como classnames, clsx
   */
  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    disabled && 'button--disabled',
    loading && 'button--loading',
    className,
  ]
    .filter(Boolean) // Remove valores falsy (undefined, false, null, '')
    .join(' ');

  /**
   * PADRÃO: Conditional Rendering Pattern
   * Renderiza conteúdo diferente baseado no estado de loading
   */
  const buttonContent = loading ? (
    <>
      <span className="button__spinner" aria-hidden="true" />
      <span className="button__loading-text">Carregando...</span>
    </>
  ) : (
    children
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading}
      {...rest} // PADRÃO: Props Spreading - Permite passar props HTML nativas
    >
      {buttonContent}
    </button>
  );
};

/**
 * PropTypes para validação em desenvolvimento
 * Documentação: https://react.dev/reference/react/Component#static-proptypes
 *
 * IMPORTANTE: PropTypes são removidos em produção (com babel-plugin-transform-react-remove-prop-types)
 * Servem apenas para desenvolvimento e documentação.
 */
ButtonStylized.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

/**
 * Default Props (alternativa: usar default parameters)
 * Documentação: https://react.dev/reference/react/Component#static-defaultprops
 */
ButtonStylized.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  type: 'button',
  className: '',
};

export default ButtonStylized;
