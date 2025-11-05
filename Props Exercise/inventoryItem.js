function InventoryItem ({name, type, quantity = 0, price = 0})
{
	const lowStock = 5;
	const valueHigh = 1000;

	const totalValue = price * quantity;
	return (
		<div>
			<h2>{name} ({type})</h2>
			{
				quantity < lowStock
				&&
				<Message>
					<p><span>⚠️</span> Low Stock! {quantity} remains.</p>
				</Message>
			}
			{
				totalValue > valueHigh
				&&
				<Message>
					<p><span>💰</span>High Value - consider extra protection!</p>
				</Message>
			}			
		</div>
	);
}
