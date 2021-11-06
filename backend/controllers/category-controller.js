const Category = require('../models/category-model');

let categoryController = {
	//obtiene categorias PARENT
	getCategories: async (req, res) => {
		try {
			const categories = await Category.find({ IS_PARENT: true });

			return res.send({
				status: 200,
				data: categories,
				message: 'Categorias correctamente cargados.',
			});
		} catch (err) {
			return res.send({ status: 400, data: null, message: error });
		}
	},

	//obtiene todas las categorias sin excepciones
	getCategoriesAll: async (req, res) => {
		try {
			const categories = await Category.find();
			return res.send({
				status: 200,
				data: categories,
				message: 'Todas las categorias correctamente cargados.',
			});
		} catch (err) {
			return res.send({ status: 400, data: null, message: error });
		}
	},

	//obtiene categorias y todas sus sub-categorias
	getCategoriesSubcategories: async (req, res) => {
		Category.find({ IS_PARENT: true })
			.populate({
				path: 'SUB_CATEGORIES',
				populate: {
					path: 'SUB_CATEGORIES',
					populate: {
						path: 'SUB_CATEGORIES',
						populate: {
							path: 'SUB_CATEGORIES',
							populate: {
								path: 'SUB_CATEGORIES',
							},
						},
					},
				},
			})
			.exec((error, category) => {
				if (error) {
					return res.send({
						status: 400,
						data: null,
						message: 'Categorias y subcategorias cargados',
					});
				} else {
					return res.send({
						status: 200,
						data: category,
						message: 'Categorias y subcategorias cargados',
					});
				}
			});
	},

	saveCategory: async (req, res) => {
		try {
			let data = req.body.data;
			let _id_parent_new = req.body._id_parent_new;

			Category.findOne({ NAME: data.NAME }, (err, category_find) => {
				if (err) {
					return res.send({ status: 400, data: null, message: err });
				}
				if (category_find) {
					return res.send({
						status: 400,
						data: null,
						message: 'Categoria ya existe.',
					});
				} else {
					_id_parent_new === ''
						? (data.IS_PARENT = true)
						: (data.IS_PARENT = false);

					Category.create(data, async (error, category) => {
						if (error) {
							return res.send({ status: 400, data: null, message: error });
						}

						if (!category.IS_PARENT) {
							Category.findByIdAndUpdate(
								_id_parent_new,
								{ $push: { SUB_CATEGORIES: category._id } },
								async (error, category_parent) => {
									if (error) {
										console.log(error);
										await category.remove((err, cat) => {
											if (err) {
												return res.send({
													status: 400,
													data: null,
													message: err,
												});
											}
											return res.send({
												status: 400,
												data: null,
												message: `No se guardó ${cat.NAME}`,
											});
										});
									}
									return res.send({
										status: 200,
										data: category,
										message: 'Guardado correctamente.',
									});
								}
							);
						} else {
							return res.send({
								status: 200,
								data: category,
								message: 'Guardado correctamente.',
							});
						}
					});
				}
			});
		} catch (e) {
			return res.send({ status: 400, data: null, message: e });
		}
	},

	updateCategory: async (req, res) => {
		try {
			let _id = req.params._id;
			let data = req.body.data;
			let _id_parent_old = req.body._id_parent_old;
			let _id_parent_new = req.body._id_parent_new;

			_id_parent_new === ''
				? (data.IS_PARENT = true)
				: (data.IS_PARENT = false);

			//setea el Id de la categoria a su nuevo padre en SUBCATEGORIAS
			const isPushIdCatParent = (_id_parent, _id_child) => {
				if (_id_parent !== '') {
					Category.findByIdAndUpdate(
						_id_parent,
						{ $push: { SUB_CATEGORIES: _id_child } },
						(error, category_parent) => {
							console.log(category_parent);
							if (error) {
								return false;
							} else {
								return true;
							}
						}
					);
				} else {
					return true;
				}
			};
			//elimina el Id de la categoria de su antiguo Categoria Padre
			const isDeleteIdCatHowSubcategories = (_id_parent_old, _id_child) => {
				Category.findByIdAndUpdate(
					_id_parent_old,
					{ $pull: { SUB_CATEGORIES: _id_child } },
					(error, category_parent) => {
						console.log(category_parent);
						if (error) {
							return false;
						} else {
							return true;
						}
					}
				);
			};

			//verifica que no existe otra categoria con el mismo nombre
			const isNameRepeated = async (name, _id_cat) => {
				console.log(name);
				Category.findOne({ NAME: name }, (err, category_find) => {
					if (err) {
						return true;
					}
					if (category_find._id.equals(_id_cat)) {
						return false;
					} else {
						return true;
					}
				});
			};

			if (!isNameRepeated(data.NAME, _id)) {
				return res.send({
					status: 202,
					data: null,
					message:
						'Ocurrió algún error o ya existe categoria con el mismo nombre.',
				});
			} else {
				if (
					//falta testear
					isPushIdCatParent(_id_parent_new, _id) &&
					isDeleteIdCatHowSubcategories(_id_parent_old, _id)
				) {
					Category.findByIdAndUpdate(
						_id,
						data,
						{ new: true },
						(error, category_new) => {
							console.log(category_new);
							if (error) {
								return res.send({
									status: 200,
									data: data,
									message: 'Error al actualizar.',
								});
							} else {
								return res.send({
									status: 200,
									data: data,
									message: 'Actualizado correctamente.',
								});
							}
						}
					);
				} else {
					return res.send({
						status: 400,
						data: null,
						message: 'Ocurrió algún error.',
					});
				}
			}
		} catch (error) {
			return res.send({ status: 400, data: null, message: error });
		}
	},
};

module.exports = categoryController;
