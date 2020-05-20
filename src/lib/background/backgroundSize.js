import propless from '../util/propless'
import construct from '../util/construct'
import percent from '../util/transformers/percent'

/**
 * Returns a function that takes an object containing backgroundSize and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${backgroundSize()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${backgroundSize(0.3)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${backgroundSize(30)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${backgroundSize('10px 20px')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${backgroundSize({ breakpoint1: 30, breakpoint2: '10px 20px'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a backgroundSize value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name backgroundSize
 * @memberOf core
 */
export default propless(
  (value, theme) => construct(value, theme, 'background-size', percent),
  'backgroundSize'
)
