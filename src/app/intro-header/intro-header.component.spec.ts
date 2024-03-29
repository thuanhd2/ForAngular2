/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { IntroHeaderComponent } from './intro-header.component';

describe('Component: IntroHeader', () => {
  it('should create an instance', () => {
    let component = new IntroHeaderComponent();
    expect(component).toBeTruthy();
  });
});
