import PropTypes from 'prop-types'

const variantClasses = {
  primary: 'bg-brand-500 text-white hover:bg-brand-600 focus-visible:ring-brand-400',
  secondary:
    'border border-border-subtle bg-surface-secondary text-text-primary hover:border-border-strong hover:bg-surface-tertiary focus-visible:ring-brand-400',
  ghost:
    'bg-transparent text-text-secondary hover:bg-surface-secondary hover:text-text-primary focus-visible:ring-brand-400',
  danger: 'bg-danger text-white hover:brightness-110 focus-visible:ring-danger',
}

const sizeClasses = {
  small: 'min-h-9 px-3 text-sm',
  medium: 'min-h-11 px-4 text-sm',
  large: 'min-h-12 px-5 text-base',
}

function Button({
  children,
  className = '',
  disabled = false,
  fullWidth = false,
  isLoading = false,
  loadingText = 'Carregando...',
  size = 'medium',
  type = 'button',
  variant = 'primary',
  ...buttonProps
}) {
  const selectedVariant = variantClasses[variant] ?? variantClasses.primary
  const selectedSize = sizeClasses[size] ?? sizeClasses.medium

  return (
    <button
      className={[
        'inline-flex items-center justify-center gap-2 rounded-md font-semibold',
        'transition duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'focus-visible:ring-offset-background',
        'disabled:cursor-not-allowed disabled:opacity-50',
        selectedVariant,
        selectedSize,
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled || isLoading}
      type={type}
      aria-busy={isLoading}
      {...buttonProps}
    >
      {isLoading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      )}

      <span>{isLoading ? loadingText : children}</span>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'danger']),
}

export default Button
