# 3章 コンポーネントのライフサイクル

コンポーネントは、state machineである。  

## コンポーネント作成時

初めてコンポーネントのクラスを使用して、インスタンスを生成する場合の処理の流れ  

* getDefaultProps(初回時のみ)
* getInitialState
* componentWillMount
* render
* componentDidMount

## コンポーネント作成後

* componentWillReceiveProps
* shouldComponentUpdate
* componentWillUpdate
* render
* componetntWillUpdate


