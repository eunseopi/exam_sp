
ListItemView = class ListItemView extends AView
{
	constructor()
	{
		super()

		//TODO:edit here
        this.data = null;
	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
	{
		super.onInitDone()

		//TODO:edit here

	}

    setData(data) 
    {
        this.ItemImage.setImage(data.img);
        this.ItemTitle.setText(data.title);
        this.ItemId.setText(data.id);
        this.ItemDate.setText(data.date);
        this.ItemAnswer.setText(data.answer);
        this.ItemAnswerCount.setText(data.answerCount);
        this.ItemViews.setText(data.views);
        this.ItemViewsCount.setText(data.viewsCount);
        this.ItemLike.setText(data.like);
        this.ItemLikeCount.setText(data.likeCount);
    }

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

