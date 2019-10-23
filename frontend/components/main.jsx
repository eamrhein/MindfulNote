import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import NotesContainer from './notes/notes_container';
import NotebookContainer from './notebooks/notebooks_index/notebooks_index_container';
import NotebookDetailContainer from './notebooks/notebook_detail/notebook_detail_container';
import TagsContainer from './tags/tags_index_container';
import TagsDetailContainer from './tags/tag_details/tag_details_container';
import Navbar from './notes/notes_navbar_container';
import ModalContainer from './modal/modal_container';

const Main = () => (
  <main className="notes">
    <Navbar />
    <ModalContainer />
    <Switch>
      <ProtectedRoute path="/notes" component={NotesContainer} />
      <ProtectedRoute exact path="/notebooks/:id" component={NotebookDetailContainer} />
      <ProtectedRoute exact path="/notebooks" component={NotebookContainer} />
      <ProtectedRoute exact path="/tags/:id" component={TagsDetailContainer} />
      <ProtectedRoute exact path="/tags" component={TagsContainer} />
      <Redirect to="/notes" />
    </Switch>
  </main>
);

export default Main;
