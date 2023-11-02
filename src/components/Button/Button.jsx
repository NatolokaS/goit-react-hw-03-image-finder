import css from 'components/App.module.css'
export const Button =({click})=>{
    return (
        <div className={css.ButtonContainer}>
            <button type="button" className={css.Button} onClick={click}>Load more</button>
        </div>
		
	)
}