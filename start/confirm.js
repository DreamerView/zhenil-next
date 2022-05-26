const ConfirmMode = (result) => {
    return(
        <>
        <div className="confirm__back">
                <div className="confirm__block">
                    <h3>
                        {result.item.name}
                    </h3>
                    <p className="sm">
                        {result.item.content}
                    </p>
                    {result.item.type === 'delete'?
                    <div className="confirm__block_action_2">
                        <div>
                            <button className="confirm_custom">{result.item.text.cancel}</button>
                        </div>
                        <div>
                            <button className={`confirm_custom_a ${result.item.text.accept_color}`}>{result.item.text.accept}</button>
                        </div>
                    </div>:''}
                </div>
            </div>
            </>
    );
};
export default ConfirmMode;